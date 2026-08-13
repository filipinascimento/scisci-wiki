# Multi-address author overcount diagnostic

## Summary

International coauthorship data need an overcount audit when author-address records exceed author counts.

## Canonical Form

- Unit of analysis: paper, author, address, country link, affiliation record, or international coauthorship flag.
- Typical representation: address-author mismatch audit for country collaboration edges.
- Mechanism, measurement, or validation target: data-quality validation for international coauthorship counting.
- Empirical signature: country collaboration links or counts change after records with more addresses than authors are flagged or deduplicated.

## Uses in Science of Science

- Refines international-collaboration data validation by linking it to [coauthorship trace construction caveats](coauthorship_trace_construction_caveats.md) and [coauthorship country counting rules](../methods/coauthorship_country_counting_rules.md).
- Useful as a reusable check when [web of science](../datasets/web_of_science.md) is used in science-of-science inference.
- Creates cross-links to [jcr subfield journal cluster construction](../methods/jcr_subfield_journal_cluster_construction.md) so the motif is not interpreted in isolation.

## Operationalization

- Flag records with more addresses than authors.
- Estimate the affected share by year, field, and journal source.
- Test robustness of country links under affiliation de-duplication and spelling-variant handling.

## Evidence and Validations

- Verified local full text from Wagner and Leydesdorff (2005) reports no spelling-variant adjustment and estimates that about 5 percent of 2000 internationally coauthored documents had more addresses than authors.
- The diagnostic makes affiliation overcount a measured caveat rather than a hidden assumption.

## Caveats

- The estimate is paper-specific and can vary by field, database vintage, and affiliation practices.
- Overcount correction can remove real multi-affiliation information if applied too aggressively.

## Links

- [Coauthorship trace construction caveats](coauthorship_trace_construction_caveats.md)
- [Coauthorship country-counting rules](../methods/coauthorship_country_counting_rules.md)
- [Web of Science](../datasets/web_of_science.md)
- [JCR subfield journal-cluster construction](../methods/jcr_subfield_journal_cluster_construction.md)
- [International coauthorship share](../measures/international_coauthorship_share.md)
- [Global science communication system](../representations/global_science_communication_system.md)

## References

- Wagner, C. S., & Leydesdorff, L. (2005). Network structure, self-organization, and the growth of international collaboration in science. *Research Policy*, 34(10), 1608-1618. https://doi.org/10.1016/j.respol.2005.08.002 [OpenAlex: W1964920419; Dimensions: pub.1029657568; WoS: unknown]

## Metadata

- Concept ID: `multi_address_author_overcount_diagnostic`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wagner and Leydesdorff (2005) (2005)
- Latest seen paper: Wagner and Leydesdorff (2005) (2005)
- Primary reference DOI: `10.1016/j.respol.2005.08.002`
- OpenAlex ID: `W1964920419`
- Dimensions ID: `pub.1029657568`
- SciSciNet ID: `W1964920419`
- Aliases: multi-affiliation overcount check; address-author mismatch audit; international coauthorship overcount diagnostic
