import React, { useState } from "react";
import "./containerData.css";
import ContainerTable from "./ContainerTable";
import SubmitData from "./SubmitData";

export default function ContainerData() {
  const [form, setform] = useState({
    nama: "",
    noTlp: "",
    namaIbadah: ["umum-ciledug", "youth-ciledug"],
    tanggalIbadah: new Date(),
    waktuPendaftara: new Date(),
  });
  const [peoples, setPeoples] = useState([
    {
      nama: "Soerjo",
      noTlp: "087808295838",
      namaIbadah: "umum-ciledug",
      tanggalIbadah: "Minggu, 28 Maret '21",
      waktuPendaftara: "Sabtu, 27 Maret '21",
    },
    {
      nama: "Suryo",
      noTlp: "087808296689",
      namaIbadah: "youth-ciledug",
      tanggalIbadah: "Minggu, 28 Maret '21",
      waktuPendaftara: "Jumat, 26 Maret '21",
    },
    {
      nama: "Hastomo",
      noTlp: "087808299788",
      namaIbadah: "umum-ciledug",
      tanggalIbadah: "Minggu, 28 Maret '21",
      waktuPendaftara: "Sabtu, 27 Maret '21",
    },
    {
      nama: "Tomo",
      noTlp: "087808299076",
      namaIbadah: "umum-ciledug",
      tanggalIbadah: "Minggu, 28 Maret '21",
      waktuPendaftara: "Jumat, 26 Maret '21",
    },
    {
      nama: "Ryo Moto",
      noTlp: "087808294532",
      namaIbadah: "youth-ciledug",
      tanggalIbadah: "Minggu, 28 Maret '21",
      waktuPendaftara: "Kamis, 25 Maret '21",
    },
    {
      nama: "Margareta Sari",
      noTlp: "087808995432",
      namaIbadah: "youth-ciledug",
      tanggalIbadah: "Minggu, 28 Maret '21",
      waktuPendaftara: "Kamis, 25 Maret '21",
    },
  ]);
  const handleSubmit = (value) => {
    console.log("isi dari value submit: ", value);
  };
  return (
    <div className="containerData">
      {console.log("isi form", form)}
      <SubmitData handleSubmit={handleSubmit} form={form} />
      <ContainerTable peoples={peoples} />
    </div>
  );
}
