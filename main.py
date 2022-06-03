import uvicorn

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return "GIS Project"

if __name__ == "__main__":

    uvicorn.run("main:app")