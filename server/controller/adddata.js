// // Add new user
// exports.create = (req, res) => {
//   const {
//     nama_usaha,
//     alamat_usaha,
//     nama_kk,
//     nama_pemilik,
//     umur,
//     alamat_tmpt_tnggl,
//     pendidikan_pemilik,
//     jenis_pengelolaan_usaha,
//     kbli,
//     rincian_kgiatan_usaha,
//     omset,
//     kekayaan_bersih_usaha,
//     tenaga_kerja,
//     modal_usaha,
//     bina_usaha,

//   } = req.body;
//   let searchTerm = req.body.search;

//   // User the connection
//   connection.query(
//     'INSERT INTO umkm SET nama_usaha = ?, alamat_usaha = ?, nama_kk = ?, nama_pemilik = ?, umur = ?, alamat_tmpt_tnggl = ?, pendidikan_pemilik = ?, jenis_pengelolaan_usaha = ?, kbli = ?, rincian_kgiatan_usaha = ?, omset = ?,kekayaan_bersih_usaha = ?, tenaga_kerja = ?, modal_usaha = ?, bina_usaha = ? ',
//     [nama_usaha, alamat_usaha , nama_kk, nama_pemilik, umur, alamat_tmpt_tnggl, pendidikan_pemilik , jenis_pengelolaan_usaha, kbli, rincian_kgiatan_usaha,omset, kekayaan_bersih_usaha,tenaga_kerja,modal_usaha,bina_usaha ],
//     (err, rows) => {
//       if (!err) {
//         res.render("tambah-data-umkm", {
//           alert: "User added successfully.",
//         });
//       } else {
//         console.log(err);
//       }
//       console.log("The data from user table: \n", rows);
//     }
//   );
// };