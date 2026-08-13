# Hidden-citation full-text access barrier

## Summary

Hidden-citation full-text access barrier is the validation caveat that hidden-credit measurement depends on systematic access to full text, which remains uneven across publishers, fields, and time periods.

## Canonical Form

- Unit of analysis: corpus boundary, publisher access regime, full-text availability flag, field, venue, period, or missing-text denominator.
- Typical representation: coverage audit, source-comparison table, inaccessible-full-text count, or field/year missingness profile.
- Validation target: prevent hidden-citation estimates from being mistaken for complete measures of uncited influence.
- Empirical signature: fields with accessible full text can be mined for hidden credit, while closed or undercovered fields remain partly invisible.

## Uses in Science of Science

- Sets the coverage boundary for [full-text hidden-citation corpora](../datasets/full_text_hidden_citation_corpora.md) and [hidden citations](../measures/hidden_citations.md).
- Connects hidden-credit measurement to [full-database bibliometric access](../methods/full_database_bibliometric_access.md), [open access status](../datasets/open_access_status.md), and [open access route typology](../datasets/open_access_route_typology.md).
- Treats delivery routes such as the [Dimensions full-text delivery layer](../methods/dimensions_full_text_delivery_layer.md) as corpus-construction provenance, not just user convenience.
- Provides a validation guardrail for [explicit-plus-hidden citation rank shift](../measures/explicit_plus_hidden_citation_rank_shift.md) and [responsible metrics](../measures/responsible_metrics.md).
- Helps explain why full-text NLP results may not transfer cleanly across disciplines.
- Complements [cross-venue hidden-citation portability](cross_venue_hidden_citation_portability.md), which tests transfer where comparable full text is available.

## Operationalization

- Report the number of papers with parseable full text, reference lists, and citation contexts in each field, venue, and year.
- Compare hidden-citation results across full-text sources such as arXiv-derived corpora, publisher corpora, and open-access subsets.
- Treat inaccessible full text as a missing-data problem rather than as absence of hidden credit.
- Run sensitivity checks that lower or vary hidden-citation thresholds only after documenting the full-text denominator.

## Evidence and Validations

- Verified full-text evidence from Meng, Varol, and Barabasi (2024) states that all-science hidden-citation detection requires a large and unbiased corpus of full-text citation contexts.
- The paper reports that some topics may be missing because they are outside the arXiv corpus, too narrow, or too outdated for the available full-text data.
- Meng et al. identify restricted full-text access by commercial interests as a major barrier to deploying hidden-citation tools across the scientific corpus.
- Their cross-field checks use available computer-science, biology, and Nature full-text corpora, making corpus access a visible validation boundary.
- Those checks motivate [cross-venue hidden-citation portability](cross_venue_hidden_citation_portability.md) as an external-validity test rather than a claim of universal coverage.

## Caveats

- Open full text is not random; it is shaped by field, funder, publisher, language, and time.
- More permissive extraction thresholds can recover missed hidden citations while increasing false positives.
- Full-text access does not guarantee clean citation parsing, reference resolution, or phrase extraction.

## Links

- [full-text hidden-citation corpora](../datasets/full_text_hidden_citation_corpora.md)
- [hidden citations](../measures/hidden_citations.md)
- [catchphrase-foundational-paper matching](../methods/catchphrase_foundational_paper_matching.md)
- [citation context windows](../representations/citation_context_windows.md)
- [full-database bibliometric access](../methods/full_database_bibliometric_access.md)
- [Dimensions full-text delivery layer](../methods/dimensions_full_text_delivery_layer.md)
- [open access status](../datasets/open_access_status.md)
- [open access route typology](../datasets/open_access_route_typology.md)
- [explicit-plus-hidden citation rank shift](../measures/explicit_plus_hidden_citation_rank_shift.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [cross-venue hidden-citation portability](cross_venue_hidden_citation_portability.md)

## References

- Meng, X., Varol, O., & Barabasi, A.-L. (2024). Hidden citations obscure true impact in science. *PNAS Nexus*, 3(5), pgae155. https://doi.org/10.1093/pnasnexus/pgae155 [OpenAlex: W4396694003; Dimensions: pub.1171389234; WoS: unknown]

## Metadata

- Concept ID: `hidden_citation_full_text_access_barrier`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Meng et al. (2024) (2024)
- Latest seen paper: Meng et al. (2024) (2024)
- Primary reference DOI: `10.1093/pnasnexus/pgae155`
- OpenAlex ID: `W4396694003`
- Dimensions ID: `pub.1171389234`
- SciSciNet ID: `W4396694003`
- Aliases: full-text access bottleneck; hidden-citation coverage barrier; closed-text hidden-credit bias; full-text denominator caveat
