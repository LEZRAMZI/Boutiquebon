let panier = [];
let total = 0;

function ajouterAuPanier(nomProduit, prixProduit) {
    panier.push({ nom: nomProduit, prix: prixProduit });
    total += prixProduit;
    afficherPanier();
}

function afficherPanier() {
    const listePanier = document.getElementById('liste-panier');
    listePanier.innerHTML = '';
    let listeArticles = '';

    panier.forEach((produit) => {
        const li = document.createElement('li');
        li.textContent = `${produit.nom} - ${produit.prix} DA`;
        listePanier.appendChild(li);

        // Ajouter le produit à la liste des articles
        listeArticles += `${produit.nom}: ${produit.prix} DA\n`;
    });

    // Mettre à jour les informations dans les champs cachés
    document.getElementById('total-panier').textContent = total;
    document.getElementById('panier-link').textContent = `Mon Panier (${panier.length})`;
    document.getElementById('total').value = total;
    document.getElementById('articles').value = listeArticles; // Met à jour le champ articles avec la liste des produits
}

function validerEtEnvoyerCommande() {
    if (panier.length === 0) {
        alert("Votre panier est vide !");
        return false; // Empêche l'envoi du formulaire si le panier est vide
    } else {
        // Le panier n'est pas vide, le formulaire peut être envoyé
        return true;
    }
}