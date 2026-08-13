# Dimensions full-text delivery layer

## Summary

Dimensions full-text delivery layer is the workflow by which a scholarly record routes users or scripts from metadata to a readable or downloadable full text through open access, publisher links, viewer integrations, or institutional holdings.

## Canonical Form

- Unit of analysis: publication record, full-text route, PDF link, viewer session, institutional holding, access entitlement, or parser-ready file.
- Typical representation: full-text availability flag, landing-page URL, PDF URL, access route, license, retrieval date, checksum, and parse status.
- Method target: convert bibliographic metadata into verified paper text for reading, NLP, citation-context extraction, and corpus construction.
- Empirical signature: records expose a route such as View PDF, open-access delivery, or subscribed institutional delivery that can be checked against the expected paper.

## Uses in Science of Science

- Supports full-text-first motif extraction from [Dimensions](../datasets/dimensions.md) records and publisher landing pages.
- Provides operational provenance for [full-text hidden-citation corpora](../datasets/full_text_hidden_citation_corpora.md), [citation context windows](../representations/citation_context_windows.md), and [citation-aware search and summarization](citation_aware_search_summarization.md).
- Connects [open access status](../datasets/open_access_status.md), institutional holdings, and [bibliometric data access modes](bibliometric_data_access_modes.md) to actual PDF or HTML recovery.
- Helps validate downloaded papers before extracting concepts, especially when publisher redirects, preprints, supplements, or wrong PDFs can be returned.

## Operationalization

- Store the source record ID, landing page, PDF URL, access route, license or entitlement, retrieval date, and file checksum.
- Verify that title, DOI, authors, year, and venue in the downloaded full text match the intended record.
- Record whether the route was open access, subscription-backed, repository-hosted, publisher-hosted, or manually recovered.
- Track parse status separately from access status: an accessible PDF may still fail OCR, reference parsing, or section extraction.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) describes Dimensions records with a View PDF link that loads a full-text copy in the browser through ReadCube viewer technology.
- Hook et al. state that open-access content could be delivered in the free version, while the paid version could integrate organizational holdings to deliver subscribed content through the Dimensions interface.
- The same full text frames one-click content access as part of bringing researchers rapidly from search results to the actual content they want to inspect.
- For science-of-science corpus construction, this makes full-text route, entitlement, and correctness checks part of the data-generation method.

## Caveats

- Viewer access does not automatically imply text-mining rights or redistribution rights.
- Institutional holdings, publisher URLs, and open-access status can change after extraction.
- Full-text availability is field-, publisher-, and year-dependent, so missing text should be treated as a coverage boundary.

## Links

- [Dimensions](../datasets/dimensions.md)
- [Dimensions access-tier scope](../validations/dimensions_access_tier_scope.md)
- [bibliometric data access modes](bibliometric_data_access_modes.md)
- [full-database bibliometric access](full_database_bibliometric_access.md)
- [open access status](../datasets/open_access_status.md)
- [open access route typology](../datasets/open_access_route_typology.md)
- [full-text hidden-citation corpora](../datasets/full_text_hidden_citation_corpora.md)
- [hidden-citation full-text access barrier](../validations/hidden_citation_full_text_access_barrier.md)
- [citation context windows](../representations/citation_context_windows.md)
- [citation-aware search and summarization](citation_aware_search_summarization.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]

## Metadata

- Concept ID: `dimensions_full_text_delivery_layer`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Hook et al. (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: Dimensions Anywhere Access; one-click full-text delivery; institutional holdings full-text route; View PDF delivery layer
