const asyncHandler = require('express-async-handler')
const Goal = require('../model/goalModel')
// const setGoal = require('../mongoHelper')
// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req,res)=>{
    const goals = await Goal.find()
    res.status(200).json(goals)
})

// @desc Set goal
// @route POST /api/goal
// @access Private
const addGoal = asyncHandler(async (req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please enter name')
    }
    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json(goal)
})

// @desc Update goal
// @route PUT /api/goal/:id
// @access Private
const updateGoal = asyncHandler(async (req,res)=>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updateGoal)
})

// @desc Delete goal
// @route DELETE /api/goal/:id
// @access Private
const deleteGoal = asyncHandler(async (req,res)=>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    await goal.remove();
    // const deleteGoal = await Goal.findByIdAndDelete(req.params.id, req.body, {new: true})
    res.status(200).json({id: req.params.id})
})

module.exports ={
    getGoals,
    addGoal,
    updateGoal,
    deleteGoal

}