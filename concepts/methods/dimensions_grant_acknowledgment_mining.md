# Dimensions grant-acknowledgment mining

## Summary

Dimensions grant-acknowledgment mining links publications to grants and funders by combining structured funder data, grant numbers, PubMed links, publisher full text, and funder-name entity recognition.

## Canonical Form

- Unit of analysis: publication, grant, funder, grant number, acknowledgment string, PubMed grant link, or paper-funder relation.
- Typical representation: publication-grant and publication-funder relation tables with source route, identifier, and confidence.
- Method target: recover upstream funding support links from structured records and unstructured acknowledgment text.
- Empirical signature: papers are linked to grant records when grant IDs or funder-name variants appear in acknowledgments or structured funder metadata.

## Uses in Science of Science

- Provides a Dimensions-specific method beneath [grant-publication linkage tables](../datasets/grant_publication_linkage_tables.md).
- Extends [funding acknowledgments and grant links](../datasets/funding_acknowledgments.md) from text mining into a linked research-object graph.
- Supplies upstream support edges for [research-object context graphs](../representations/research_object_context_graphs.md) and [upstream-downstream scholarly linkages](../datasets/upstream_downstream_scholarly_linkages.md).
- Enables funding-efficiency, field-development, and funder-portfolio questions without treating support links as causal treatment assignments.

## Operationalization

- Ingest structured paper-grant links from PubMed or funder reports where available.
- Search acknowledgment sections for grant numbers, grant codes, funder names, and funder-name variants.
- Use structured links as training data for machine-learning extraction when possible.
- Store relation type separately: explicit grant ID, PubMed/funder-reported grant link, publisher-mined grant ID, or funder-name acknowledgment.
- Deduplicate repeated paper-grant and paper-funder links while preserving source routes and confidence.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) says PubMed includes data reported to funders or appearing in papers, and Dimensions uses these data as a learning set for a machine-learning approach.
- Hook et al. state that Dimensions searches acknowledgments for grant numbers and codes using a grant-information dataset originally built by UberResearch.
- The paper reports millions of publication-grant links and funder acknowledgments in the launch-era Dimensions dataset.
- Hook et al. also describe recognizing funder-name strings when grant identifiers are absent, using a registry of funders and funder-name variants.

## Caveats

- Funder acknowledgments can signal support, facility use, data access, or administrative requirements; they are not automatically causal funding treatments.
- Grant-number formats, funder names, and acknowledgment norms vary across funders, fields, and time.
- Text-mined funder-name links should not be mixed with explicit grant-ID links without relation-route flags.

## Links

- [grant-publication linkage tables](../datasets/grant_publication_linkage_tables.md)
- [funding acknowledgments and grant links](../datasets/funding_acknowledgments.md)
- [Dimensions](../datasets/dimensions.md)
- [research-object context graphs](../representations/research_object_context_graphs.md)
- [upstream-downstream scholarly linkages](../datasets/upstream_downstream_scholarly_linkages.md)
- [grant-acknowledgment output linkage](grant_acknowledgment_output_linkage.md)
- [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]

## Metadata

- Concept ID: `dimensions_grant_acknowledgment_mining`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Hook et al. (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: Dimensions grant mining; funder acknowledgment entity recognition; grant-number acknowledgment mining; paper-funder extraction
