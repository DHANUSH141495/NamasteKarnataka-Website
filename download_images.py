import csv
import os
import requests

# Create place-images folder
os.makedirs("place-images", exist_ok=True)

# Read CSV
with open("karnataka_places_images.csv", "r", encoding="utf-8") as file:
    reader = csv.DictReader(file)
    for row in reader:
        place = row["Place"].replace(" ", "_").replace("/", "_").replace("(", "").replace(")", "")
        url = row["ImageURL"]
        filename = f"place-images/{place}.jpg"
        try:
            print(f"Downloading {place}...")
            headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
            r = requests.get(url, headers=headers, timeout=10)
            if r.status_code == 200:
                with open(filename, "wb") as img:
                    img.write(r.content)
            else:
                print(f"Failed: {place} (HTTP {r.status_code})")
        except Exception as e:
            print(f"Error downloading {place}: {e}")

print("Download complete!")
