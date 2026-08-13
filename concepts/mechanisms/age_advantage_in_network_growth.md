# Age advantage in network growth

## Summary

Age advantage in network growth is the mechanism by which earlier-entering nodes have more time to accumulate links and can become disproportionately connected in a growing network.

## Canonical Form

- Unit of analysis: node entry cohort, paper age, author career age, venue age, topic age, or institutional cohort.
- Typical representation: degree by entry time, age-normalized citation or collaboration curve, or cohort-stratified network trajectory.
- Mechanism: older nodes have more exposure time and, under preferential attachment, early degree advantages compound.
- Empirical signature: earlier entrants remain overrepresented among high-degree nodes after accounting for network size and field growth.

## Uses in Science of Science

- Separates exposure-time effects from quality, fitness, reputation, and field relevance.
- Explains why citation and collaboration analyses need publication-year, career-age, and database-window controls.
- Complements [citation aging and obsolescence](citation_aging_obsolescence.md): older papers have more exposure but may also become obsolete.
- Connects [network growth](network_growth.md) to [node degree growth trajectories](../measures/node_degree_growth_trajectory.md).

## Operationalization

- Define node-entry time from publication date, first indexed record, first authorship, first collaboration, first patent, or first appearance in a topic.
- Measure later degree or citation counts by entry cohort.
- Compare raw high-degree share with age-normalized or cohort-normalized counts.
- Test whether early-entry advantage persists after controlling for field size, citation window, venue, author reputation, and paper fitness.
- Use temporal null models to distinguish exposure time from preferential attachment.

## Evidence and Validations

- Verified full-text evidence from Barabasi and Albert (1999) shows that older vertices increase their connectivity at the expense of younger vertices in the base model.
- The paper derives k_i(t) = m(t / t_i)^0.5, directly linking later degree to the time t_i when a node entered the network.
- Barabasi and Albert describe this as a rich-get-richer process in which an initial connectivity difference grows as the network expands.
- For scholarly networks, this supports treating publication year, author career age, and database-entry windows as core covariates rather than incidental metadata.

## Caveats

- Older nodes can lose relevance through obsolescence, field turnover, or topic replacement.
- Early-entry advantage can be confounded with quality, priority, prestigious venue placement, and founder status.
- Backfile incompleteness can make older nodes look younger or hide their early links.

## Links

- [network growth](network_growth.md)
- [preferential attachment](preferential_attachment.md)
- [cumulative advantage](cumulative_advantage.md)
- [node degree growth trajectory](../measures/node_degree_growth_trajectory.md)
- [linear preferential-attachment kernel](../measures/linear_attachment_kernel.md)
- [stationary scale-free growth model](../methods/stationary_scale_free_growth_model.md)
- [citation aging and obsolescence](citation_aging_obsolescence.md)
- [citation window selection](../methods/citation_window_selection.md)
- [paper fitness](../measures/paper_fitness.md)

## References

- Barabasi, A.-L., & Albert, R. (1999). Emergence of scaling in random networks. *Science*, 286(5439), 509-512. https://doi.org/10.1126/science.286.5439.509 [OpenAlex: W2008620264; Dimensions: pub.1010080128; WoS: unknown]

## Metadata

- Concept ID: `age_advantage_in_network_growth`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Barabasi and Albert (1999) (1999)
- Latest seen paper: Barabasi and Albert (1999) (1999)
- Primary reference DOI: `10.1126/science.286.5439.509`
- OpenAlex ID: `W2008620264`
- Dimensions ID: `pub.1010080128`
- SciSciNet ID: `W2008620264`
- Aliases: early-entry advantage; age exposure advantage; older-node advantage; cohort exposure effect
