"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as RadixLabel from "@radix-ui/react-label";
import { Button } from "@radix-ui/themes";
import IUser from "../@types/IUser";
import toast from "react-hot-toast";
import { IoCheckmark } from "react-icons/io5";
import { apiURL } from "../settings";

const CreateUserForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUser>();

    const onSubmit: SubmitHandler<IUser> = async (data) => {
        try {
            const response = await fetch(`${apiURL}/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const user = await response.json();

            const localUsers = localStorage.getItem("users");

            const usersArray: IUser[] = localUsers
                ? JSON.parse(localUsers)
                : [];

            const maxId =
                usersArray.length > 0
                    ? Math.max(
                          ...usersArray.map((user: { id: number }) => user.id)
                      )
                    : 0;

            const newUser = {
                ...user,
                id: maxId + 1,
            };

            usersArray.push(newUser);

            localStorage.setItem("users", JSON.stringify(usersArray));

            toast.success("User successfuly created!", {
                icon: <IoCheckmark className="text-2xl text-primary-500" />,
            });
        } catch (error) {
            toast.error(`An error ocurred while creating user`);
        }
    };

    return (
        <div className="w-[280px] sm:w-[550px] md:w-[650px] my-8 p-6 bg-white rounded-lg shadow-2xl">
            <h2 className="text-2xl font-semibold text-center mb-6">
                Create User
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div className="flex flex-col">
                    <RadixLabel.Root
                        htmlFor="name"
                        className="text-sm font-medium text-gray-700 mb-2"
                    >
                        Name: <span className="text-red-500">*</span>
                    </RadixLabel.Root>
                    <input
                        id="name"
                        {...register("name", {
                            required: "Name is required",
                        })}
                        className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
                    />
                    {errors.name && (
                        <span className="text-sm text-red-500 mt-1">
                            {errors.name.message}
                        </span>
                    )}
                </div>

                {/* E-mail */}
                <div className="flex flex-col">
                    <RadixLabel.Root
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700 mb-2"
                    >
                        E-mail: <span className="text-red-500">*</span>
                    </RadixLabel.Root>
                    <input
                        id="email"
                        type="email"
                        {...register("email", {
                            required: "E-mail is required",
                        })}
                        className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
                    />
                    {errors.email && (
                        <span className="text-sm text-red-500 mt-1">
                            {errors.email.message}
                        </span>
                    )}
                </div>

                {/* Address */}
                <div className="flex flex-col">
                    <RadixLabel.Root
                        htmlFor="address.street"
                        className="text-sm font-medium text-gray-700 mb-2"
                    >
                        Street: <span className="text-red-500">*</span>
                    </RadixLabel.Root>
                    <input
                        id="address.street"
                        {...register("address.street", {
                            required: "Street is required",
                        })}
                        className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
                    />
                    {errors.address?.street && (
                        <span className="text-sm text-red-500 mt-1">
                            {errors.address.street.message}
                        </span>
                    )}
                </div>

                {/* Comapany */}
                <div className="flex flex-col">
                    <RadixLabel.Root
                        htmlFor="company.name"
                        className="text-sm font-medium text-gray-700 mb-2"
                    >
                        Company Name: <span className="text-red-500">*</span>
                    </RadixLabel.Root>
                    <input
                        id="company.name"
                        {...register("company.name", {
                            required: "Company name is required",
                        })}
                        className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
                    />
                    {errors.company?.name && (
                        <span className="text-sm text-red-500 mt-1">
                            {errors.company.name.message}
                        </span>
                    )}
                </div>

                {/* Submit Button */}
                <div className="text-center cursor-pointer">
                    <Button variant="classic" type="submit" size="3">
                        Create
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default CreateUserForm;
