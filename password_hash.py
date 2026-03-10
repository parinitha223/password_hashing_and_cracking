import hashlib

password=input("enter the password:")

# the hash works on only bytes.
pass_bytes=password.encode()
# applying sha256 on the bytes of password and getting a hash object
hash_obj=hashlib.sha256(pass_bytes)
# converting the hash object into readable hex numbers 
pass_hash=hash_obj.hexdigest()

print(pass_hash)