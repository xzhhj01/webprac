import sys

def divide(x,y,n):
  global white,blue
  c = line[x][y]
  for i in range(x,x+n):
    for j in range(y,y+n):
      if(line[i][j]!=c):
        divide(x,y,n//2)
        divide(x+(n//2),y,n//2)
        divide(x,y+(n//2),n//2)
        divide(x+(n//2),y+(n//2),n//2)
        return
  if(c==0):
    white+=1
  else:
    blue+=1
white,blue = 0,0
n = int(input())
line = []
for i in range(n):
  numbers = list(map(int,sys.stdin.readline().strip().split()))
  line.append(numbers)
divide(0,0,n)
print(white)
print(blue)