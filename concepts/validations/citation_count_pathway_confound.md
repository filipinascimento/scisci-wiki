# Citation-count pathway confound

## Summary

Citation-count pathway confound is the risk that highly cited papers or patents appear closer to a target boundary simply because they have more citation paths available.

## Canonical Form

- Unit of analysis: paper, patent, citation count, reference count, shortest path, or boundary distance.
- Typical representation: validity caveat or fixed-effect control for the number of citations made or received.
- Validation target: distinguish substantive proximity to a boundary from mechanical path availability.
- Empirical signature: more cited or more reference-rich outputs have more chances to find a short path even under weak substantive linkage.

## Uses in Science of Science

- Adds a key validity check to [science-technology distance](../measures/science_technology_distance.md).
- Helps interpret [patent-paper boundary impact premium](../mechanisms/patent_paper_boundary_impact_premium.md) without conflating impact with path opportunity.
- Generalizes to other shortest-path metrics in [citation networks](../representations/citation_networks.md).

## Operationalization

- Measure reference counts and received citation counts for each node.
- Estimate boundary distance with and without citation-count fixed effects or residualization.
- Compare field, institution, and impact conclusions before and after accounting for path opportunity.
- Use random citation nulls when path-count mechanics are central to the interpretation.

## Evidence and Validations

- Verified full-text evidence from Ahmadpoor and Jones (2017) notes a natural relationship between distance and reference counts.
- The supplementary methods discuss whether distance results should account for citations made and received.
- The paper uses fixed effects and a null model to clarify whether science-technology distance is only a citation-volume artifact.

## Caveats

- Citation-count controls can also remove meaningful diffusion pathways.
- The relevant count can be citations made, citations received, or both depending on graph direction.
- The confound is strongest when shortest paths are interpreted substantively rather than as descriptive reachability.

## Links

- [science-technology distance](../measures/science_technology_distance.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [patent-paper boundary impact premium](../mechanisms/patent_paper_boundary_impact_premium.md)
- [frontier-distance random citation null](frontier_distance_random_citation_null.md)
- [field-distance residual rank check](field_distance_residual_rank_check.md)

## References

- Ahmadpoor, M., & Jones, B. F. (2017). The dual frontier: Patented inventions and prior scientific advance. *Science*, 357(6351), 583-587. https://doi.org/10.1126/science.aam9527 [OpenAlex: W2743628650; Dimensions: pub.1091201170; SciSciNet: W2743628650; WoS: unknown]

## Metadata

- Concept ID: `citation_count_pathway_confound`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ahmadpoor and Jones (2017) (2017)
- Latest seen paper: Ahmadpoor and Jones (2017) (2017)
- Primary reference DOI: `10.1126/science.aam9527`
- OpenAlex ID: `W2743628650`
- Dimensions ID: `pub.1091201170`
- SciSciNet ID: `W2743628650`
- Aliases: path-opportunity citation confound; citation-volume distance confound; shortest-path citation-count bias; boundary-distance citation-count confound
