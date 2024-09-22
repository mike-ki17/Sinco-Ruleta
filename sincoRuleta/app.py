from flask import Flask, render_template, request, redirect, url_for, flash 
import mysql.connector

# Crear una instancia de la aplicación Flask
app = Flask(__name__)

db_config = {
    'user': 'mike',
    'password': 'sincoDesarrollo@123',
    'host': 'localhost',
    'database': 'sincoRegistrados'
}

app.secret_key = '123mikepro'

@app.route('/')
def index():
    return render_template('./index.html')

@app.route('/RuletaERP.html')
def RuletaERP():
    return render_template('./RuletaERP.html')

@app.route('/RuletaAcademi.html')
def RuletaAcademi():
    return render_template('./RuletaAcademi.html')

@app.route('/insertar', methods=['POST'])
def insertar():
    nombre = request.form.get('nombre')
    empresa = request.form.get('empresa')
    premio = request.form.get('premio')
    correo = request.form.get('correo')
    celular = request.form.get('celular')

    # Validación simple
    if not all([nombre, empresa, premio, correo, celular]):
        flash('Todos los campos son obligatorios.')
        return redirect(url_for('index'))

    conn = None
    try:
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()
        
        sql = "INSERT INTO Usuarios (Nombre, Empresa, Premio, Correo, Celular) VALUES (%s, %s, %s, %s, %s)"
        datos = (nombre, empresa, premio, correo, celular)
        
        cursor.execute(sql, datos)
        conn.commit()
        flash('Datos insertados correctamente.')
        return redirect(url_for('index'))
    except mysql.connector.Error as err:
        flash(f"Error al insertar datos: {err}")
        return redirect(url_for('index'))
    finally:
        if cursor:
            cursor.close()
        if conn and conn.is_connected():
            conn.close()

# Ejecutar el servidor si este archivo es ejecutado directamente
if __name__ == '__main__':
    app.run(debug=True)
