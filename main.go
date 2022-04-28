package main

import (
	"html/template"
	"net/http"
)

type Page struct {
	Valeur string
}

var templates = template.Must(template.ParseFiles("main.html"))

func main() {
	fs := http.FileServer(http.Dir("css"))
	http.Handle("/css/", http.StripPrefix("/css", fs))
	cs := http.FileServer(http.Dir("javascript"))
	http.Handle("/javascript/", http.StripPrefix("/javascript", cs))
	http.HandleFunc("/", homeHandler)
	http.ListenAndServe(":8080", nil)
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
	p := Page{Valeur: ""}
	err := templates.ExecuteTemplate(w, "main.html", p)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
