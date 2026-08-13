# Collaborator/non-collaborator field flow

## Summary

Collaborator/non-collaborator field flow measures how publication and funding activity in a focal subfield splits between authors who previously collaborated with a focal star scientist and related authors who did not.

## Canonical Form

- Unit of analysis: subfield-year, related article, author, NIH award, collaborator group, or non-collaborator group.
- Typical representation: group-specific count outcomes in a field panel.
- Measurement target: whether a field change is driven by the focal scientist's collaborators, by intellectually related outsiders, or by both.
- Empirical signature: group-specific publication and funding counts diverge after a shock to the field.

## Uses in Science of Science

- Separates social-network loss from intellectual-neighborhood entry in [superstar death event studies](../methods/superstar_death_event_study.md).
- Gives [outsider entry after star death](../mechanisms/outsider_entry_after_star_death.md) a concrete field-year outcome.
- Links [collaboration networks](../representations/coauthorship_networks.md) with content-defined subfields from [PMRA subfield delineation](../methods/pmra_subfield_delineation.md).
- Helps test whether field renewal is a collaborator succession process or an entry process from outside the prior collaboration network.

## Operationalization

- For each related article in a subfield, match article authors to a researcher roster when possible.
- Mark an article as collaborator flow if at least one identified author coauthored with the star before the year of death or counterfactual death.
- Mark an article as non-collaborator flow if no identified author previously coauthored with the star.
- Remove publications authored by the deceased star to avoid mechanical output loss.
- Aggregate article counts and NIH-award counts to the subfield-year level, then estimate group-specific event-study or difference-in-differences models.

## Evidence and Validations

- Verified full-text evidence from Azoulay, Fons-Rosen, and Graff Zivin (2019) assigns related articles to collaborator and non-collaborator bins using pre-death coauthorship with the focal star.
- The paper reports that roughly 11% of baseline publication activity is attributable to collaborators, with similar baseline proportions across treated and control subfields.
- After star death, collaborator publication activity declines by about 20.7%, while non-collaborator publication activity rises by 8.6% on average.
- Similar patterns appear in NIH funding-flow counts tied to publications in the focal subfields.
- Event-study graphs show no pre-death divergence for collaborator or non-collaborator publication activity, supporting the design's use as a field-flow measure.
- The same study adds an author-level output reallocation check showing that entrant activity can rise inside the focal field without increasing entrants' total output.

## Caveats

- Non-collaborator does not mean socially disconnected; it means no observed pre-death coauthorship with the star in the publication corpus.
- Roster matching misses some foreign, industrial, and nonacademic authors.
- Group-specific flow can reflect reallocation from other fields, not necessarily higher aggregate scientific output.

## Links

- [superstar death event study](../methods/superstar_death_event_study.md)
- [deceased superstar life-scientist panel](../datasets/deceased_superstar_life_scientist_panel.md)
- [outsider entry after star death](../mechanisms/outsider_entry_after_star_death.md)
- [star-scientist entry deterrence](../mechanisms/star_scientist_entry_deterrence.md)
- [author field-overlap entry bins](author_field_overlap_entry_bins.md)
- [author-level output reallocation check](../validations/author_level_output_reallocation_check.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [collaboration clustering coefficient](collaboration_clustering_coefficient.md)
- [NIH IMPAC R01 grant panel](../datasets/nih_impac_r01_grant_panel.md)

## References

- Azoulay, P., Fons-Rosen, C., & Graff Zivin, J. S. (2019). Does Science Advance One Funeral at a Time? *American Economic Review*, 109(8), 2889-2920. https://doi.org/10.1257/aer.20161574 [OpenAlex: W2193631239; Dimensions: pub.1120042002; WoS: unknown]

## Metadata

- Concept ID: `collaborator_noncollaborator_field_flow`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Azoulay et al. (2019) (2019)
- Latest seen paper: Azoulay et al. (2019) (2019)
- Primary reference DOI: `10.1257/aer.20161574`
- OpenAlex ID: `W2193631239`
- Dimensions ID: `pub.1120042002`
- SciSciNet ID: `W2193631239`
- Aliases: collaborator versus outsider flow; non-collaborator field entry; post-death field-flow split; collaborator publication flow
