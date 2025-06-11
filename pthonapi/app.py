from flask import Flask
from routes.product import product_bp

app = Flask(__name__)
app.register_blueprint(product_bp, url_prefix='/api/product')

if __name__ == '__main__':
    app.run(debug=True)
