import requests
import json

# 接口地址
url = "http://api.quanshenghuoqin.com:8668/api/product/list"

try:
    # 发起 GET 请求
    response = requests.get(url, timeout=5)

    # 检查状态码
    if response.status_code == 200:
        data = response.json()
        print("接口请求成功 ✅")
        print("响应数据：")
        print(json.dumps(data, indent=2, ensure_ascii=False))
    else:
        print(f"请求失败，状态码：{response.status_code}")
except Exception as e:
    print(f"请求出错：{e}")
