import json
import random
import os

def inject_prices(input_path, output_path):
    if not os.path.exists(input_path):
        print(f"Error: {input_path} not found.")
        return

    with open(input_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    for prop in data:
        # Get luxury/royal status
        luxury = prop.get('luxury_score', 3)
        royal = prop.get('royal_rating', 4)

        # Consistent Price Generation based on prestige
        if royal >= 5 or luxury >= 4:
            base = random.randint(1200, 2800)
        elif luxury >= 3:
            base = random.randint(600, 1100)
        else:
            base = random.randint(350, 580)

        prop['base_price_usd'] = base
        # Add a "Verified" flag for Sovereign Trust
        prop['sovereign_verified'] = True if royal >= 4 else False

    with open(output_path, 'w', encoding='utf-8-sig') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"Successfully injected prices for {len(data)} properties.")

if __name__ == "__main__":
    # Correct paths for the local environment
    base_dir = r"c:\Users\alaoa\code IDP\Nozoluxe"
    data_path = os.path.join(base_dir, "src", "data", "properties_enriched.json")
    inject_prices(data_path, data_path)
