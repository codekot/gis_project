import uvicorn

from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from content import index

app = FastAPI()


@app.get("/", response_class=HTMLResponse)
def home():
    return index

if __name__ == "__main__":

    uvicorn.run("main:app", reload=True)