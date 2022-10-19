from http.client import HTTPException
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from model import Student

# App object
app = FastAPI()

from database import (
    fetch_all_students,
    create_student,
)

origins = ['http://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def read_root():
    return {"Message": "Hi"}


@app.get("/api/student")
async def get_student():
    response = await fetch_all_students()
    return response


@app.post("/api/student", response_model=Student)
async def post_student(student: Student):
    response = await create_student(student.dict())
    if response:
        return student
    raise HTTPException(400, "Something went wrong :(")



