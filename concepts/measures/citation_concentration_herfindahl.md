# Citation concentration Herfindahl

## Summary

Citation concentration Herfindahl measures whether citations in a focal journal, field, or window are spread across many sources or concentrated in a few cited articles or journals.

## Canonical Form

- Unit of analysis: journal-year, subfield-year, field-year, citation window, cited-article distribution, or cited-journal distribution.
- Typical representation: Herfindahl index, sum of squared citation shares, concentration score, or inverse diversity.
- Measurement target: balance of attention across cited sources.
- Empirical signature: higher Herfindahl values mean citations are concentrated on fewer articles or journals.

## Uses in Science of Science

- Operationalizes one concentration channel of [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md).
- Connects [attention inequality](../mechanisms/attention_inequality.md), [cumulative advantage](../mechanisms/cumulative_advantage.md), and [electronic access citation narrowing](../mechanisms/electronic_access_citation_narrowing.md).
- Captures the outcome expected under [hyperlink consensus acceleration](../mechanisms/hyperlink_consensus_acceleration.md), where link-following concentrates attention on central cited work.
- Complements [citation breadth via distinct cited sources](citation_breadth_distinct_sources.md) by measuring balance after source counts are known.
- Can be compared across citation networks, journal citation profiles, author portfolios, subfields, and online-access regimes.
- Provides an interpretable audit statistic for recommendation systems that might overexpose already-central papers.

## Operationalization

- Define the focal citation population and citation window.
- For each cited article or journal j, compute its share of citations within the focal population.
- Square each share and sum the squared shares across cited sources.
- Interpret a value near 1 as complete concentration on one source and values near 0 as more even diffusion over many sources.
- Compare within fields, years, or sources; Herfindahl scores are sensitive to denominator size.

## Evidence and Validations

- Verified full-text evidence from Evans (2008) computes a Herfindahl index over citations to particular articles and journals in 20-year windows.
- Evans defines concentration as the squared citation share for each cited source summed over the focal journal or subfield.
- In the Evans sample, article concentration within journals ranges from 0.0000933 to 1, with an average of 0.088 and a wide standard deviation.
- Evans reports that 10 additional years of commercial online availability predicts concentration rising from 0.088 to 0.105 for articles cited within a journal.
- The same full text reports that commercial provision consistently increases citation concentration in article and journal models, while free availability has mixed but often positive concentration effects at the subfield level.
- The route-specific pattern links this measure to [commercial-free access channel contrast](../methods/commercial_free_access_channel_contrast.md).

## Caveats

- Herfindahl values change with the size of the citation population and the window length.
- Concentration can reflect legitimate canonical convergence, database coverage, method standardization, or interface-driven attention.
- Citation shares can be distorted by review articles, large methods papers, and field-specific reference norms.

## Links

- [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md)
- [attention inequality](../mechanisms/attention_inequality.md)
- [cumulative advantage](../mechanisms/cumulative_advantage.md)
- [electronic access citation narrowing](../mechanisms/electronic_access_citation_narrowing.md)
- [hyperlink consensus acceleration](../mechanisms/hyperlink_consensus_acceleration.md)
- [commercial-free access channel contrast](../methods/commercial_free_access_channel_contrast.md)
- [citation breadth via distinct cited sources](citation_breadth_distinct_sources.md)
- [online backfile depth](online_backfile_depth.md)
- [citation source concentration ratio](citation_source_concentration_ratio.md)
- [citation networks](../representations/citation_networks.md)

## References

- Evans, J. A. (2008). Electronic publication and the narrowing of science and scholarship. *Science*, 321(5887), 395-399. https://doi.org/10.1126/science.1150473 [OpenAlex: W2125660293; Dimensions: pub.1062457136; WoS: unknown]

## Metadata

- Concept ID: `citation_concentration_herfindahl`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Evans (2008) (2008)
- Latest seen paper: Evans (2008) (2008)
- Primary reference DOI: `10.1126/science.1150473`
- OpenAlex ID: `W2125660293`
- Dimensions ID: `pub.1062457136`
- SciSciNet ID: `W2125660293`
- Aliases: citation Herfindahl; cited-source concentration; citation concentration index; citation share concentration
