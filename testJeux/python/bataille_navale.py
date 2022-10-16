# only works with Python 3.10
import random
import time

maxtours = 10
lignes = 5
colonnes = 5


def showtable(T):
	''' function for show table'''

	time.sleep(1)
	print("\n Voici la table de jeu:\n\n")
	time.sleep(1)
	print('\t      ', end='')
	for i in range(len(T)):
		print(chr(i+65),end=' ')
	print("\n")
	for i in range(len(T)):

		print('\t',i+1,'   ', end='')
		for j in T[i]:
			print(j, end=' ')
		print('\n')
	time.sleep(2)
	print("\n La partie peut commencer\n\n")



def showbattle(T, x, y, touche):
	''' function for show battle'''

	time.sleep(2)
	print("\n Le joueur a jouer :",chr(y+65)+str(x+1))
	time.sleep(1)
	if touche:
		print(" Le joueur a touché\n\n")
	else:
		print(" Le joueur a rater la cible\n\n")
	print('\t      ', end='')
	time.sleep(2)
	for i in range(len(T)):
		print(chr(i+65),end=' ')
	print("\n")
	for i in range(len(T)):

		print('\t',i+1,'   ', end='')
		for j in T[i]:
			print(j, end=' ')
		print('\n')
		

def game(M, L, C):
	
	tabposition = []
	"""
	 *Remplissage tableau à la main*
	|                               |
	V                               V
	tabposition = [[0,0,0,0,0],[0,0,0,1,0],[0,0,0,1,0],[0,0,0,1,0],[0,0,0,0,0]]
	"""
	# Rempliassage tableau
	for i in range(L):
		tabposition.append([])
		for j in range(C):
			tabposition[i].append(0)

	# ajout de la position du bateau
	tabposition[1][3]= 1
	tabposition[2][3]= 1
	tabposition[3][3]= 1
	# A remplacer now
	# showbattle(tabposition)

	# initialisation des compteurs 
	cpt = 0
	missiles = M
	# calcule du nombre de cibles
	for i in range(L):
		for j in range(C):
			if tabposition[i][j] == 1:
				cpt +=1

	# Début de la partie
	showtable(tabposition)
	while (cpt>0) & (missiles>0):
		touche = False
		x = random.randrange(L)
		y = random.randrange(C)
		cible = tabposition[x][y]

		if (cible == 1):
			tabposition[x][y] = 0
			cpt -=1
			touche = True
		missiles -=1
		showbattle(tabposition, x, y, touche)

	if (cpt == 0) & (missiles == 0):
		print("Victoire")
	else:
		match cpt:
			case 3: 
				print("Défaite majeur")
			case 2: 
				print("Défaite mineur")
			case 1: 
				print("Victoire mineur")
			case 0: 
				print("Victoire majeur")


game(maxtours, lignes, colonnes)
