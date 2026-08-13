# Unlinked reference coverage control

## Summary

Unlinked reference coverage control adds the number of references not indexed or linkable in the citation database as a covariate when modeling disruption or citation outcomes.

## Canonical Form

- Unit of analysis: paper, reference list, linked citation graph, or disruption regression.
- Typical representation: count or share of references that cannot be linked to indexed works.
- Validation target: guard against artifacts from incomplete citation-link coverage.
- Empirical signature: results remain stable after accounting for unlinked-reference burden.

## Uses in Science of Science

- Adds a paper-level coverage check to [disruptiveness practice-control stack](disruptiveness_practice_control_stack.md).
- Links disruption analysis to [Web of Science](../datasets/web_of_science.md) coverage limits.
- Supports interpretation of [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md).
- Helps validate [cited-age dispersion interaction](../measures/cited_age_dispersion_interaction.md).

## Operationalization

- For each focal paper, count references not linked to database-indexed works.
- Include that count or share as a model control.
- Check whether focal disruption or knowledge-use coefficients change.
- Report the database and linking rules used to define unlinked references.

## Evidence and Validations

- Verified full-text evidence from Park, Leahey, and Funk (2023) includes a paper-level control for references not indexed in Web of Science.
- This control is used to reduce concern that disruption trends are driven by changing reference-link coverage.
- The motif is especially relevant when long historical panels mix well-linked recent records with weaker older coverage.

## Caveats

- A count of unlinked references does not reveal what kind of knowledge was missed.
- Unlinked references may include books, reports, datasets, software, or older literature.
- Coverage controls cannot fully repair missing citation edges.

## Links

- [disruptiveness practice-control stack](disruptiveness_practice_control_stack.md)
- [Web of Science](../datasets/web_of_science.md)
- [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md)
- [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md)
- [cited-age dispersion interaction](../measures/cited_age_dispersion_interaction.md)

## References

- Park, M., Leahey, E., & Funk, R. J. (2023). Papers and patents are becoming less disruptive over time. *Nature*, 613, 138-144. https://doi.org/10.1038/s41586-022-05543-x [OpenAlex: W4313545395; Dimensions: pub.1154226028; SciSciNet: W4313545395; WoS: unknown]

## Metadata

- Concept ID: `unlinked_reference_coverage_control`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Park et al. (2023) (2023)
- Latest seen paper: Park et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41586-022-05543-x`
- OpenAlex ID: `W4313545395`
- Dimensions ID: `pub.1154226028`
- SciSciNet ID: `W4313545395`
- Aliases: unlinked reference control; reference-linkage coverage covariate; citation graph coverage control
