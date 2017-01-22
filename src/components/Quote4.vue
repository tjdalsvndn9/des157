<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="panel panel-default">
            <div class="panel panel-body quote">
                <slot name="quote4"></slot>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
        .panel-body{
            font-family:helvetica;
            font-size:24px;
            color:#6e6e6e;
        }
        .quote{
            cursor:pointer;

        }
        .quote:hover{
            background-color:lightpink;
            color:white;
        }
</style>