import os 
from dotenv import load_dotenv
import mysql.connector
from mysql.connector import pooling


load_dotenv()

dbconfig = {
    "host": os.getenv("DB_HOST"),
    "user": os.getenv("DB_USER"),
    "password": os.getenv("DB_PASSWORD"),
    "database": os.getenv("DB_DATABASE"),
    "charset": "utf8mb4"
}

connection_pool = mysql.connector.pooling.MySQLConnectionPool(
    pool_name= os.getenv("DB_POOL_NAME","mypool"),
    pool_size= int(os.getenv("DB_POOL_SIZE",5)),
    **dbconfig
)

def get_db():
    return connection_pool.get_connection()