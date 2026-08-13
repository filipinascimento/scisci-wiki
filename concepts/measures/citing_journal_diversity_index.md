# Citing-journal diversity index

## Summary

Citing-journal diversity index measures the breadth of a scientist's impact by how dispersed the journals citing their work are.

## Canonical Form

- Unit of analysis: scientist, paper portfolio, citing journal, pre/post event period, or funding-program group.
- Typical representation: one minus the Herfindahl index of citing-journal concentration.
- Measurement target: breadth of downstream uptake, as distinct from citation depth.
- Empirical signature: a higher diversity index indicates that citations come from a wider set of journals.

## Uses in Science of Science

- Complements citation-count outcomes by measuring impact breadth rather than only impact intensity.
- Helps evaluate whether [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md) broaden the audience of a research program.
- Connects topic-change measures such as [MeSH keyword trajectory shift](mesh_keyword_trajectory_shift.md) to downstream diffusion.
- Can be used with journal classifications, science maps, or citation contexts to study cross-field reach.

## Operationalization

- Collect all papers that cite a scientist's focal publication set during a specified window.
- Count citing articles by citing journal.
- Compute the Herfindahl concentration index across citing journals.
- Use `1 - H` as a diversity score, with higher values indicating broader journal spread.

## Evidence and Validations

- Verified full-text evidence from Azoulay et al. (2009) uses one minus the Herfindahl index of citing-journal concentration as a measure of impact breadth.
- The paper contrasts this breadth measure with citation quantile outcomes, which measure impact depth.
- Table 8 reports higher post-appointment citing-journal diversity for HHMI investigators relative to controls, consistent with broader research agendas after appointment.

## Caveats

- Journal diversity depends on database coverage, journal title normalization, citation window, and field boundaries.
- Broad citing-journal spread can reflect interdisciplinary reach, generality, review-article effects, or field size.
- Diversity across journals is not the same as diversity across disciplines unless journals are mapped to fields.

## Links

- [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md)
- [MeSH keyword trajectory shift](mesh_keyword_trajectory_shift.md)
- [citation impact indicators](citation_impact_indicators.md)
- [journal similarity mapping](../methods/journal_similarity_mapping.md)
- [science maps](../representations/science_maps.md)
- [interdisciplinarity dimensions](interdisciplinarity_dimensions.md)
- [HHMI-NIH incentive contrast](../methods/hhmi_nih_incentive_contrast.md)

## References

- Azoulay, P., Graff Zivin, J. S., & Manso, G. (2009). Incentives and creativity: Evidence from the academic life sciences. *NBER Working Paper Series*, No. 15466. https://doi.org/10.3386/w15466 [OpenAlex: W3024332105; Dimensions: unknown; WoS: unknown]

## Metadata

- Concept ID: `citing_journal_diversity_index`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Azoulay et al. (2009) (2009)
- Latest seen paper: Azoulay et al. (2009) (2009)
- Primary reference DOI: `10.3386/w15466`
- OpenAlex ID: `W3024332105`
- Dimensions ID: `unknown`
- SciSciNet ID: `unknown`
- Aliases: citing journal diversity; impact breadth index; one minus Herfindahl citing journals; citation breadth diversity
