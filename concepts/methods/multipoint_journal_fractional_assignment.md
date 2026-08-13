# Multipoint journal fractional assignment

## Summary

Multipoint journal fractional assignment handles journals that plausibly belong to multiple science-map clusters by removing them during clustering and assigning fractional weights back to relevant clusters.

## Canonical Form

- Unit of analysis: multidisciplinary journal, source title, cluster, fractional membership weight, paper, or map overlay record.
- Typical representation: multi-cluster journal assignment table or fractional journal-to-subdiscipline weights.
- Method target: prevent broad or multidisciplinary journals from distorting cluster construction while still representing their distributed field membership.
- Empirical signature: journals identified as multipoint are not forced into one cluster during map construction and later contribute fractionally to multiple clusters.

## Uses in Science of Science

- Refines [field classifications](../measures/field_classifications.md) and [science map update workflows](science_map_update_workflows.md) when source titles span fields.
- Supports cleaner [science map overlays](../representations/science_map_overlays.md) by preserving distributed journal membership.
- Helps interpret multidisciplinary journals in [science maps](../representations/science_maps.md) and [journal-cluster science backbones](../representations/journal_cluster_science_backbones.md).
- Provides a map-construction counterpart to [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md).

## Operationalization

- Identify journals likely to distribute across multiple categories before final clustering.
- Remove those journals from the main similarity matrix during cluster formation.
- Add them back after clustering with fractional assignments to the appropriate clusters.
- Preserve the fractional assignment table for downstream overlays, field-normalized indicators, and map updates.

## Evidence and Validations

- Verified full-text evidence from Borner et al. (2012) identifies multipoint journals as those most likely to distribute across multiple categories.
- The UCSD workflow removes multipoint journals from the matrix before graph layout and clustering.
- Borner et al. then add multipoint journals back into the solution and fractionally assign them to appropriate clusters.
- The paper frames this as part of producing a journal classification system that is easier to understand while still handling interdisciplinary source titles.

## Caveats

- Identifying multipoint journals requires thresholds or expert rules that can change cluster membership.
- Fractional assignment improves representation but complicates counts, overlays, and evaluation denominators.
- Highly multidisciplinary journals may still be poor proxies for the field membership of individual papers.

## Links

- [science map update workflows](science_map_update_workflows.md)
- [science maps](../representations/science_maps.md)
- [science map overlays](../representations/science_map_overlays.md)
- [journal-cluster science backbones](../representations/journal_cluster_science_backbones.md)
- [field classifications](../measures/field_classifications.md)
- [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md)
- [reference set construction](reference_set_construction.md)
- [weighted science-map matrix fusion](weighted_science_map_matrix_fusion.md)

## References

- Borner, K., Klavans, R., Patek, M., Zoss, A. M., Biberstine, J. R., Light, R. P., Lariviere, V., & Boyack, K. W. (2012). Design and update of a classification system: The UCSD map of science. *PLOS ONE*, 7(7), e39464. https://doi.org/10.1371/journal.pone.0039464 [OpenAlex: W2036137014; Dimensions: pub.1049668114; WoS: unknown]

## Metadata

- Concept ID: `multipoint_journal_fractional_assignment`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Borner et al. (2012) (2012)
- Latest seen paper: Borner et al. (2012) (2012)
- Primary reference DOI: `10.1371/journal.pone.0039464`
- OpenAlex ID: `W2036137014`
- Dimensions ID: `pub.1049668114`
- SciSciNet ID: `W2036137014`
- Aliases: multipoint journal assignment; fractional source classification; multi-cluster journal membership; interdisciplinary journal assignment
