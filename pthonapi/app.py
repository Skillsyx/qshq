from flask import Flask
from routes.product import product_bp
from routes.login import login_bp

app = Flask(__name__)
app.register_blueprint(product_bp, url_prefix='/api/product')
app.register_blueprint(login_bp, url_prefix='/api/login')

if __name__ == '__main__':
    app.run(house='0.0.0.0', port=8668, debug=True)
