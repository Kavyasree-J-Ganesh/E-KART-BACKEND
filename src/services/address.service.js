import Address from '../models/address.model';

export const createAddress = async (
  fullName,
  mobile,
  address,
  town,
  state,
  userId
) => {
  const newAddress = new Address({
    fullName,
    mobile,
    address,
    town,
    state,
    userId
  });
  return await newAddress.save();
};

export const getAddressesById = async (userId) => {
  let addressDetails = await Address.findOne({ userId: userId });
  if (!addressDetails) {
    return {
      userId: userId,
      Address: []
    };
  }
  return addressDetails;
};

export const updateAddress = async (
  userId,
  addressId,
  fullName,
  mobile,
  address,
  town,
  state
) => {
  return await Address.findOneAndUpdate(
    { _id: addressId, userId },
    { fullName, mobile, address, town, state },
    { new: true }
  );
};

export const deleteAddress = async (userId, addressId) => {
  const checkCart = await Address.findByIdAndDelete({ _id: userId });
  if (checkCart) {
    return checkCart;
  } else {
    throw new Error('Error Deleting Address');
  }
};

export const getAllAddresses = async (userId) => {
  return await Address.find({ userId });
};
