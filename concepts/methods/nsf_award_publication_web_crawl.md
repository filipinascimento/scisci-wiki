# NSF award-publication web crawl

## Summary

NSF publication linkages can be expanded by crawling award pages and extracting listed research outputs.

## Canonical Form

- Unit of analysis: NSF award, award page, raw publication string, publication match, or grant-publication edge.
- Typical representation: award-page crawl and publication-string extraction pipeline.
- Mechanism, measurement, or validation target: NSF award-to-publication linkage coverage beyond standard grant databases.
- Empirical signature: award pages expose publication strings that can be matched to paper identifiers..

## Uses in Science of Science

- Adds a web-derived source to [grant-publication linkage tables](../datasets/grant_publication_linkage_tables.md).
- Pairs naturally with [confidence-typed fuzzy linkages](confidence_typed_fuzzy_linkages.md).
- Supplies a concrete case for [external linkage source-scope caveat](../validations/external_linkage_source_scope_caveat.md).

## Operationalization

- Build the NSF award-number universe.
- Download award pages and parse publication-result sections.
- Extract raw publication strings and match them to SciSciNet papers.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) describes a Federal RePORTER gap, an NSF award-page crawl, structural parsing, and award-output collection.

## Caveats

- Award pages expose outputs unevenly and may change structure over time.
- Page-listed publications are not equivalent to complete funding acknowledgments.

## Links

- [Grant-publication linkage tables](../datasets/grant_publication_linkage_tables.md)
- [Grant-acknowledgment output linkage](grant_acknowledgment_output_linkage.md)
- [Identifier bridge-key crosswalks](../representations/identifier_bridge_key_crosswalks.md)
- [Confidence-typed fuzzy linkages](confidence_typed_fuzzy_linkages.md)
- [SciSciNet-Dimensions grant-linkage validation](../validations/sciscinet_dimensions_grant_linkage_validation.md)
- [External linkage source-scope caveat](../validations/external_linkage_source_scope_caveat.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `nsf_award_publication_web_crawl`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: NSF publication crawl; NSF award output extraction; award-page publication mining; NSF.gov publication linkage pipeline
