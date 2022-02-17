<template lang="pug">
.table-container
    script(type="text/javascript").
            var tabulate = function (data,columns) {
                var table = document.querySelector('#tableau').append('table').attr('class', 'table')
                var thead = table.append('thead')
                var tbody = table.append('tbody')

                thead.append('tr')
                .selectAll('th')
                    .data(columns)
                    .enter()
                .append('th')
                    .text(function (d) { return d })

                var rows = tbody.selectAll('tr')
                    .data(data)
                    .enter()
                .append('tr')

                var cells = rows.selectAll('td')
                    .data(function(row) {
                        return columns.map(function (column) {
                            return { column: column, value: row[column] }
                    })
                })
                .enter()
                .append('td')
                .text(function (d) { return d.value })

            return table;
            }

            
            
    #tableau

</template>

<script>

export default {

    mounted() {
        this.$store.commit('read', this.link)

        
        // d3.csv(this.lien,function (data) {
        //         tabulate(data, Object.keys(data[0])) 
        // })
    },
    props:['lien']
}
</script>