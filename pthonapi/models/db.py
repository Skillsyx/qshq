import mysql.connector

def get_db():
    return mysql.connector.connect(
        host="47.117.37.186",
        user="sa",
        password="Skills46",
        database="qshq",
        charset="utf8mb4"
    )
