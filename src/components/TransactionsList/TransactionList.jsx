// import React, { useState, useEffect } from 'react';
// //
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
// import { Navigate } from 'react-router-dom';
// import svg from '../../Assets/svg/Sprite.svg';
// // prettier-ignore
// import { deleteTransactionThunk, getTransactionsThunk } from '../../redux/transactions/transactionOperations';
// //
// // prettier-ignore
// import { selectFilter, selectStartDate } from '../../redux/filter/filterSelector';
// import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
// import { selectTransaction } from '../../redux/transactions/transactionSelectors';
// import Modal from 'components/Modal/Modal';
// import { useModal } from '../../hooks/useModal';
// import OperationForm from '../../Utils/Operations/OperationForm';

// // Styles
// import {
//   TransactionsContainer,
//   TransSubContainer,
//   TransactionsCategory,
//   TransactionsComment,
//   TransactionsDate,
//   TransactionsTime,
//   TransactionsSum,
//   EditButton,
//   DeleteButton,
// } from './TransactionsList.styled';

// export const TransactionList = () => {
//   const filter = useSelector(selectFilter);
//   const dispatch = useDispatch();
//   const transactions = useSelector(selectTransaction);
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   // const date = useSelector(selectStartDate);
//   // Modal
//   const { isOpened, openModal, closeModal } = useModal();
//   const [editData, setEditData] = useState('');

//   // const formattedDate = `${date.year}-${String(date.month).padStart(
//   //   2,
//   //   '0'
//   // )}-${String(date.day).padStart(2, '0')}`;

//   // useEffect(() => {
//   //
//   //   dispatch(
//   //     getTransactionsThunk({
//   //       type: 'expenses',
//   //       date: formattedDate,
//   //     })
//   //   );
//   // }, [dispatch, filter, formattedDate, date]);

//   const handleDelete = (transactionId, transactionComment) => {
//     dispatch(deleteTransactionThunk(transactionId));
//     toast.success(`Transaction ${transactionComment} was deleted`);
//   };

//   const filterTransactions = transactions.filter(transaction =>
//     transaction.comment
//       .toLowerCase()
//       .trim()
//       .includes(filter.toLowerCase().trim())
//   );

//   if (!isLoggedIn) {
//     return <Navigate to="/login" />;
//   }

//   const isDeletedCategory = catName => {
//     if (!catName) {
//       return `Deleted Category`;
//     }
//     return catName;
//   };

//   return (
//     <TransactionsContainer>
//       {filterTransactions?.map(transaction => (
//         <TransSubContainer key={transaction._id}>
//           <TransactionsCategory>
//             {isDeletedCategory(transaction.category?.categoryName)}
//           </TransactionsCategory>
//           <TransactionsComment>{transaction.comment}</TransactionsComment>
//           <TransactionsDate>{transaction.date}</TransactionsDate>
//           <TransactionsTime>{transaction.time}</TransactionsTime>
//           <TransactionsSum>{transaction.sum} / UAH</TransactionsSum>
//           <EditButton
//             onClick={() => {
//               setEditData(transaction);
//               openModal();
//             }}
//           >
//             <svg width={16} height={16}>
//               <use href={svg + '#icon-edit-2'}></use>
//             </svg>
//             <span>Edit</span>
//           </EditButton>
//           <DeleteButton
//             onClick={() => handleDelete(transaction._id, transaction.comment)}
//           >
//             <svg width={16} height={16}>
//               <use href={svg + '#icon-trash-2'}></use>
//             </svg>
//             <span>Delete</span>
//           </DeleteButton>
//         </TransSubContainer>
//       ))}
//       {isOpened ? (
//         <Modal
//           children={
//             <OperationForm editData={editData} closeModal={closeModal} />
//           }
//           closeModal={closeModal}
//         />
//       ) : null}
//     </TransactionsContainer>
//   );
// };

// // export default TransactionList;
