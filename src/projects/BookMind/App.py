import streamlit as st
import pandas as pd
from PIL import Image
import base64

# Initialize session state
if 'favorites' not in st.session_state:
    st.session_state.favorites = []

# Sample book data
books_data = {
    'title': [
        '1984', 'To Kill a Mockingbird', 'The Great Gatsby',
        'Pride and Prejudice', 'The Catcher in the Rye'
    ],
    'author': [
        'George Orwell', 'Harper Lee', 'F. Scott Fitzgerald',
        'Jane Austen', 'J.D. Salinger'
    ],
    'genre': [
        'Dystopian', 'Literary Fiction', 'Literary Fiction',
        'Romance', 'Literary Fiction'
    ],
    'description': [
        'A dystopian novel about totalitarian control',
        'A story about racial injustice in the American South',
        'A tale of wealth, love, and the American Dream',
        'A classic romance novel about social class and love',
        'A coming-of-age story about teenage alienation'
    ]
}

books_df = pd.DataFrame(books_data)

def export_favorites_pdf():
    if not st.session_state.favorites:
        st.warning("No favorites to export!")
        return
    
    pdf_content = "My Favorite Books\n\n"
    for book in st.session_state.favorites:
        pdf_content += f"Title: {book['title']}\n"
        pdf_content += f"Author: {book['author']}\n"
        pdf_content += f"Genre: {book['genre']}\n"
        pdf_content += f"Description: {book['description']}\n\n"
    
    b64 = base64.b64encode(pdf_content.encode()).decode()
    href = f'<a href="data:file/txt;base64,{b64}" download="favorite_books.txt">Download Favorites</a>'
    st.markdown(href, unsafe_allow_html=True)

def main():
    st.title("📚 BookMind")
    st.write("Your AI-Powered Book Companion")
    
    # Search functionality
    search_term = st.text_input("Search books by title, author, or genre")
    
    if search_term:
        results = books_df[
            books_df['title'].str.contains(search_term, case=False) |
            books_df['author'].str.contains(search_term, case=False) |
            books_df['genre'].str.contains(search_term, case=False)
        ]
    else:
        results = books_df
    
    # Display results
    for _, book in results.iterrows():
        col1, col2 = st.columns([3, 1])
        with col1:
            st.subheader(book['title'])
            st.write(f"By {book['author']}")
            st.write(f"Genre: {book['genre']}")
            st.write(book['description'])
        with col2:
            book_dict = book.to_dict()
            if book_dict not in st.session_state.favorites:
                if st.button(f"Add to Favorites 🌟", key=book['title']):
                    st.session_state.favorites.append(book_dict)
                    st.success(f"Added {book['title']} to favorites!")
            else:
                if st.button(f"Remove from Favorites ❌", key=book['title']):
                    st.session_state.favorites.remove(book_dict)
                    st.success(f"Removed {book['title']} from favorites!")
    
    # Favorites section
    st.sidebar.title("My Favorites")
    if st.session_state.favorites:
        for book in st.session_state.favorites:
            st.sidebar.write(f"📖 {book['title']}")
        
        if st.sidebar.button("Export Favorites"):
            export_favorites_pdf()
    else:
        st.sidebar.write("No favorites yet!")

if __name__ == "__main__":
    main()