# User-need unit-of-analysis alignment

## Summary

User-need unit-of-analysis alignment chooses the mapped entity, such as journals, papers, authors, text, or funding sources, according to the decision context and intended user.

## Canonical Form

- Unit of analysis: journal, paper, author, text unit, funding source, organization, discipline, or user group.
- Typical representation: design matrix linking users, decisions, data sources, map units, and validation needs.
- Method target: match representation granularity to the action the map is meant to support.
- Empirical signature: managers, researchers, funders, and navigators receive different map units even when they draw on related data.

## Uses in Science of Science

- Extends [journal similarity mapping](journal_similarity_mapping.md) by making journals one design choice rather than the default unit.
- Links [journal-level map distortion caveat](../validations/journal_level_map_distortion_caveat.md) to user-centered map design.
- Motivates transitions from journal maps to [publication-level field classification](publication_level_field_classification.md) when researchers need paper-level navigation.
- Provides a design criterion for the [science-map desiderata checklist](../validations/science_map_desiderata_checklist.md).

## Operationalization

- Define the user group and decision: resource allocation, field navigation, literature discovery, expertise search, or portfolio monitoring.
- Select the candidate units that can support the decision at the needed scale.
- Check data availability, matrix size, validation feasibility, and interpretability for each unit.
- Document why the chosen unit is adequate and what information it suppresses.
- Revisit the unit choice when the user group changes.

## Evidence and Validations

- Verified full-text evidence from Boyack, Klavans, and Borner (2005) explains that disciplinary journal maps were chosen because senior R&D managers and university administrators organize and decide through familiar disciplinary departments.
- The paper contrasts journal-level maps with paper-level maps, which are aimed at individual researchers navigating research communities and require much larger matrices.
- The authors later generalize this logic, arguing that alternative units such as journal clusters, papers, authors, funding sources, and text can be generated to address different user needs.

## Caveats

- User-centered unit choices can optimize local usefulness while limiting comparability across studies.
- Coarse units improve readability but can hide interdisciplinary or emerging work.
- Fine units improve specificity but raise computation, validation, and labeling burdens.

## Links

- [journal similarity mapping](journal_similarity_mapping.md)
- [journal-level map distortion caveat](../validations/journal_level_map_distortion_caveat.md)
- [publication-level field classification](publication_level_field_classification.md)
- [science-map desiderata checklist](../validations/science_map_desiderata_checklist.md)
- [science maps](../representations/science_maps.md)
- [paper-field linkages](../representations/paper_field_linkages.md)

## References

- Boyack, K. W., Klavans, R., & Borner, K. (2005). Mapping the backbone of science. *Scientometrics*, 64, 351-374. https://doi.org/10.1007/s11192-005-0255-6 [OpenAlex: W2100484636; Dimensions: pub.1011403274; SciSciNet: W2100484636; WoS: unknown]

## Metadata

- Concept ID: `user_need_unit_of_analysis_alignment`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Boyack et al. (2005) (2005)
- Latest seen paper: Boyack et al. (2005) (2005)
- Primary reference DOI: `10.1007/s11192-005-0255-6`
- OpenAlex ID: `W2100484636`
- Dimensions ID: `pub.1011403274`
- SciSciNet ID: `W2100484636`
- Aliases: map unit-user fit; user-driven map granularity; unit-of-analysis map design; decision-aligned map units
