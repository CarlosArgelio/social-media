import yaml
import json

with open('swagger/swagger.yaml', 'r') as f:
    swagger_spec = yaml.load(f, yaml.FullLoader)


# Convert the YAML data to JSON
json_data = json.dumps(swagger_spec)

with open('swagger/swagger.json', 'w') as f:
    f.write(json_data)
