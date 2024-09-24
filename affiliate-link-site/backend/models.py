from app import db

class Link(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    link = db.Column(db.String(512), nullable=False)
    image = db.Column(db.String(512))
    price = db.Column(db.String(50))

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'link': self.link,
            'image': self.image,
            'price': self.price
        }
