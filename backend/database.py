from model import Student
import motor.motor_asyncio
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# MongoDB driver
uri = os.environ["MONGO_URI"]

client = motor.motor_asyncio.AsyncIOMotorClient(uri)
database = client.test
collection = database.students


async def fetch_one_student(firstName):
    document = collection.find_one({"firstName":firstName})
    return document


async def fetch_all_students():
    students = []
    cursor = collection.find({})
    async for document in cursor:
        students.append(Student(**document))
    return students


async def create_student(student):
    document = student
    result = await collection.insert_one(document)
    return result
