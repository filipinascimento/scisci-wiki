# Grant identifier standardization gap

## Summary

Grant identifier standardization gap is the limitation that funding-output links often mix explicit award-number matches with weaker funder-name or acknowledgment matches because grant identifiers are not standardized across funders.

## Canonical Form

- Unit of analysis: grant, award number, funder, funding acknowledgment, publication, or grant-publication relation.
- Typical representation: award-number field, funder-name registry, acknowledgment-mined link, and match-type flag.
- Validation target: prevent funder-name recognition from being interpreted as the same evidence as a unique grant-to-output link.
- Empirical signature: a linkage table separates explicit grant identifiers from inferred funder attributions or name-variant matches.

## Uses in Science of Science

- Qualifies [funding acknowledgments and grant links](../datasets/funding_acknowledgments.md) when funding evidence is extracted from text.
- Adds a cross-funder identifier caveat to [grant-publication linkage tables](../datasets/grant_publication_linkage_tables.md).
- Helps compare [Dimensions grant-acknowledgment mining](../methods/dimensions_grant_acknowledgment_mining.md) with NIH, NSF, Crossref, or other linkage sources.
- Supports [scholarly identifier spine](../representations/scholarly_identifier_spine.md) design for funding data.

## Operationalization

- Store match type as grant-ID match, funder-name match, acknowledgment-text recognition, reported funder relation, or manual link.
- Keep funder registry identifiers separate from award identifiers.
- Report the share of links by match type before using grants as treatment, exposure, or outcome variables.
- When possible, validate grant links against funder-native award-publication tables or independent sources such as Crossref funder metadata.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) describes Dimensions linking publications to grants through machine learning over content where publisher relationships permit access.
- The paper distinguishes explicit grant links from ancillary entity recognition that links papers to funding bodies when a grant identifier is absent or unavailable in the database.
- Hook et al. state that the field still needs unique cross-funder grant identifiers and more consistent structured capture at submission.

## Caveats

- Funder-name links can be useful for broad funding exposure but are weaker than award-level links.
- Grant-number formats vary by agency, program, and time; string normalization alone is not enough for cross-funder comparability.
- Missing grant identifiers can create field, funder, and publisher biases in funding-output studies.

## Links

- [funding acknowledgments and grant links](../datasets/funding_acknowledgments.md)
- [grant-publication linkage tables](../datasets/grant_publication_linkage_tables.md)
- [Dimensions grant-acknowledgment mining](../methods/dimensions_grant_acknowledgment_mining.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [identifier bridge-key crosswalks](../representations/identifier_bridge_key_crosswalks.md)
- [unique-identifier inclusion gate](unique_identifier_inclusion_gate.md)
- [confidence-typed fuzzy linkages](../methods/confidence_typed_fuzzy_linkages.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]

## Metadata

- Concept ID: `grant_identifier_standardization_gap`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Hook et al. (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: grant ID standardization gap; cross-funder award identifier gap; funder-name-only funding links; award-number linkage caveat
