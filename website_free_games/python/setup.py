from cx_Freeze import setup, Executable

base = None    

executables = [Executable("api.py", base=base)]

packages = ["idna", "os", "sys"]
options = {
    'build_exe': {    
        'packages':packages,
    },    
}

setup(
    name = "games_project",
    options = options,
    version = "0.11",
    description = '',
    executables = executables
)