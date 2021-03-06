const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const helloSchema = new Schema(
  {
    message: String,
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = mongoose.model('Hello', helloSchema);
