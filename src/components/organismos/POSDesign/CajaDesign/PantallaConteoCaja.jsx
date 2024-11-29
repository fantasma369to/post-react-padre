import React, { useState } from "react";
import styled from "styled-components";
import { InputText2 } from "../../formularios/InputText2";
import { Btn1 } from "../../../moleculas/Btn1";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCierreCajaStore } from "../../../../store/CierreCajaStore";
import { toast } from "sonner";
import { useUsuariosStore } from "../../../../store/UsuariosStore";
import { useCajasStore } from "../../../../store/CajasStore";

import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { BarLoader } from "react-spinners";
import { VolverBtn } from "../../../moleculas/VolverBtn";
import { FormatearNumeroDinero } from "../../../../utils/Conversiones";
import { useEmpresaStore } from "../../../../store/EmpresaStore";
import { useMovCajaStore } from "../../../../store/MovCajaStore";
import { useFormattedDate } from "../../../../hooks/useFormattedDate";

export function PantallaConteoCaja() {
  const fechaactual = useFormattedDate();
  const [montoEfectivo, setMontoEfectivo] = useState(0);
  const [motivo, setMotivo] = useState("-");
  const { totalEfectivoTotalCaja } = useMovCajaStore();
  const queryClient = useQueryClient();

  const { datausuarios } = useUsuariosStore();
  const { dataempresa } = useEmpresaStore();
  const { dataCaja } = useCajasStore();
  const {
    setStateConteoCaja,
    tipoRegistro,
    insertarIngresoSalidaCaja,
    cerrarTurnoCaja,
    dataCierreCaja,
    setStateCierraCaja,
  } = useCierreCajaStore();
  const [startDate, setStartDate] = useState(new Date());

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const insertar = async (data) => {
    const p = {
      id: dataCierreCaja?.id,
      fechacierre: fechaactual,
      id_usuario: datausuarios?.id,
      total_efectivo_calculado: parseFloat(totalEfectivoTotalCaja),
      total_efectivo_real: data.montoreal,
      estado: 1,
      diferencia_efectivo: diferencia,
    };
    await cerrarTurnoCaja(p);
  };

  const {
    isPending,
    mutate: doInsertar,
    isSuccess,
  } = useMutation({
    mutationFn: insertar,
    onSuccess: () => {
      toast.success("🎉 Caja cerrada correctamente!!!");

      setStateConteoCaja(false);
      setStateCierraCaja(false);
      reset();
      queryClient.invalidateQueries(["mostrar cierre de caja"]);
    },
    onError: (error) => {
      toast.error(`Error al cerrar caja: ${error.message}`);
    },
  });

  const handlesub = (data) => {
    doInsertar(data);
  };

  // Calcula la diferencia entre el total esperado en caja y el monto ingresado
  const diferencia = montoEfectivo - totalEfectivoTotalCaja;

  // Define el mensaje y el color del anuncio basado en la diferencia
  const anuncioMensaje =
    diferencia === 0
      ? "Genial, todo está perfecto"
      : "La diferencia será registrada en su turno y se enviará a gerencia";

  const anuncioColor = diferencia === 0 ? "#09bc42" : "#ff3f56";

  return (
    <Container>
      <VolverBtn funcion={() => setStateConteoCaja(false)} />

      <span className="title">Efectivo esperado en caja:</span>
      <span className="title">
        {FormatearNumeroDinero(
          totalEfectivoTotalCaja,
          dataempresa?.currency,
          dataempresa?.iso
        )}
      </span>
      {isPending ? (
        <BarLoader color="#2af169" />
      ) : (
        <form onSubmit={handleSubmit(handlesub)}>
          <section className="area1">
            <span>¿Cuánto de EFECTIVO hay en caja física?</span>
            <InputText2>
              <input
                className="form__field"
                placeholder="0.00"
                type="number"
                {...register("montoreal", {
                  required: true,
                  onChange: (e) =>
                    setMontoEfectivo(parseFloat(e.target.value) || 0),
                })}
              />
              {errors.montoreal?.type === "required" && <p>Campo requerido</p>}
            </InputText2>
            <Divider />
            <span>
              diferencia:{" "}
              {FormatearNumeroDinero(
                diferencia,
                dataempresa?.currency,
                dataempresa?.iso
              )}
            </span>
            <article className="contentbtn">
              <Btn1
                titulo={"CERRAR TURNO"}
                color="#ffffff"
                border="2px"
                bgcolor="#1da939"
              />
            </article>
          </section>
        </form>
      )}
      <span className="anuncio" style={{ color: anuncioColor }}>
        {anuncioMensaje}
      </span>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.bgtotal};
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  position: absolute;
  z-index: 100;
  gap: 10px;
  input {
    text-align: center;
  }
  p {
    color: #ff0062;
    font-weight: bold;
  }
  flex-direction: column;
  .contentVolver {
    margin-bottom: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    .icono {
      font-size: 25px;
    }
  }
  .title {
    font-size: 25px;
    font-weight: bold;
  }
  .area1 {
    display: flex;
    flex-direction: column;
    gap: 12px;
    .contentbtn {
      margin-top: 15px;
      display: flex;
      gap: 12px;
    }
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.color2};
  margin-right: 10px;
`;
