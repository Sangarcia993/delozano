import instaloader
import os, shutil

LOL = instaloader.Instaloader()

"""
# Optionally, login or load session
L.login(USER, PASSWORD)        # (login)
L.interactive_login(USER)      # (ask password on terminal)
L.load_session_from_file(USER) # (load session created w/
                               #  `instaloader -l USERNAME`)
"""

nombre = input("Introduce el nombre de usuario: ")

if nombre == "":
    nombre = "de_lo_zano"

posts = instaloader.Profile.from_username(LOL.context, "de_lo_zano").get_posts()

counter = 0

if os.path.exists("de_lo_zano"):
    shutil.rmtree("de_lo_zano")



for post in posts:
    if post.is_video:
        pass
    else:
        counter += 1
        LOL.download_post(post, "de_lo_zano")
    if counter == 10:
        break