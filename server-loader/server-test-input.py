#python2.7
import os
from socket import *
from uuid import getnode

#get host ip
host = raw_input("Enter ip: ")
port = int(raw_input("Enter port: "))
addr = (host, port)
UDPSock = socket(AF_INET, SOCK_DGRAM)

while True:

    data = raw_input("enter input: ")
    if data == "exit":
        break
    UDPSock.sendto(data, addr)
UDPSock.close()
os._exit(0)
