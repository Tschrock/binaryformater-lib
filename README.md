BinaryFormatter-Lib (node/typescript)
=====================================

BinaryFormatter-Lib is a Node.js/TypeScript library for reading and writing binary blobs that are in Microsoft's .NET Remoting Binary Format.

The Open Specifications Document for this format is **[MS-NRBF]** and can be found at https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-nrbf/75b9fe09-be15-475f-85b8-ae7b7558cfe5

Important Note: This library is *NOT* for serializing or deserializing JavaScript objects using this format - it merely reads the data into a well-defined data structure that mimics the underlying binary format, and provides a mechanism for writing it back out.