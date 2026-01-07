#!/usr/bin/env python3
from rembg import remove
from PIL import Image
import os

images = [
    ('public/images/watches/lange-datograph/1.jpg', 'public/images/watches/lange-datograph/1.png'),
    ('public/images/watches/lange-datograph/2.jpg', 'public/images/watches/lange-datograph/2.png'),
    ('public/images/watches/lange-qp/1.jpg', 'public/images/watches/lange-qp/1.png'),
    ('public/images/watches/lange-qp/2.jpg', 'public/images/watches/lange-qp/2.png'),
    ('public/images/watches/lange-qp/3.jpg', 'public/images/watches/lange-qp/3.png'),
]

for input_path, output_path in images:
    print(f'Processing: {input_path}')
    try:
        with Image.open(input_path) as img:
            output = remove(img)
            output.save(output_path)
            print(f'✓ Saved: {output_path}')
    except Exception as e:
        print(f'✗ Error: {e}')

print('\n✓ All images processed!')
