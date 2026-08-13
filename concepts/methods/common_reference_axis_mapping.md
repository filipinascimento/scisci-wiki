# Common reference-axis mapping

## Summary

Heterogeneous research objects can be normalized by projecting them onto shared axes such as institutions, journals, geography, funders, people, and fields.

## Canonical Form

- Unit of analysis: research object, institution, journal, country, funder, person, field, registry, or category system.
- Typical representation: shared reference axes used to filter and aggregate multiple research-object types.
- Mechanism, measurement, or validation target: cross-object normalization for contextual analytics.
- Empirical signature: publications, grants, patents, policy documents, and trials become comparable after mapping to common registries and classifications.

## Uses in Science of Science

- Refines cross-object normalization by linking it to [field classifications](../measures/field_classifications.md) and [paper author affiliation linkages](../representations/paper_author_affiliation_linkages.md).
- Useful as a reusable check when [paper field linkages](../representations/paper_field_linkages.md) is used in science-of-science inference.
- Creates cross-links to [geocoded affiliation extraction](geocoded_affiliation_extraction.md) so the motif is not interpreted in isolation.

## Operationalization

- Map each eligible object type to common registries and classification systems.
- Use common axes for filtering, aggregation, panels, and contextual analytics.
- Record registry version, hierarchy, and source-specific missingness for each axis.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) frames Dimensions as requiring good-quality axes and common reference points such as Fields of Research and GRID.
- Those axes make cross-entity navigation and analytics possible.

## Caveats

- Registry choice imports each registry's scope, hierarchy, and curation assumptions.
- A shared axis can hide source-specific differences in link quality and coverage.

## Links

- [Field classifications](../measures/field_classifications.md)
- [Paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [Paper-field linkages](../representations/paper_field_linkages.md)
- [Geocoded affiliation extraction](geocoded_affiliation_extraction.md)
- [Scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [Field-classification sensitivity](../validations/field_classification_sensitivity.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]

## Metadata

- Concept ID: `common_reference_axis_mapping`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Hook et al. (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: navigational axes; reference-axis normalization; shared analytical axes
