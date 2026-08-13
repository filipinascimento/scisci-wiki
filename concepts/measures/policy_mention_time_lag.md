# Policy mention time lag

## Summary

Policy mention time lag measures the temporal delay between scholarly publication and observed mention in policy-related documents.

## Canonical Form

- Unit of analysis: paper, publication year, policy-document mention, policy source, field, topic, or source snapshot.
- Typical representation: annual nonzero mention rate, publication-year profile, mention delay distribution, peak policy-mention year, or age-adjusted policy-attention rate.
- Measurement target: how slowly research enters tracked policy documents compared with scholarly citations or other online attention sources.
- Empirical signature: policy-mentioned papers can skew older than the baseline publication corpus, suggesting slower policy uptake or delayed document production.

## Uses in Science of Science

- Adds a policy-specific timing measure for [policy document mentions](policy_document_mentions.md).
- Specializes [altmetric attention timing windows](../methods/altmetric_attention_timing_windows.md) to the slower policy-document channel.
- Helps evaluate [public and policy attention](../mechanisms/public_policy_attention.md) without penalizing papers that are too recent for policy uptake.
- Supplies a temporal denominator for [policy mention enrichment profiles](../methods/policy_mention_enrichment_profiles.md).

## Operationalization

- Record publication dates, policy-document dates when available, provider collection dates, and DOI/source-list coverage dates.
- Estimate mention delay as the difference between publication date and first observed policy mention or between publication year and policy snapshot.
- Compare policy-mentioned papers with all eligible papers in the same field, topic, and source-list snapshot.
- Use fixed exposure windows or age-normalized models before comparing authors, institutions, fields, or funders.
- Report policy lag separately from citation lag, because policy documents and scholarly articles have different production cycles.

## Evidence and Validations

- Verified full-text evidence from Bornmann, Haunschild, and Marx (2016) compares annual distributions for climate-change papers and policy-mentioned climate-change papers and concludes that policy literature tends to cite older research than researchers cite in scholarly papers.
- The same paper argues that time- and area-specific normalization would be necessary if policy mentions were used for evaluating entities with outputs across broad periods and topics.
- Verified full-text evidence from Haunschild and Bornmann (2017) finds that annual policy-mention percentages peak for older publication years in their 2000-2014 Web of Science sample, consistent with a longer time frame for policy-related mentions than for typical scholarly citations.
- Haunschild and Bornmann recommend repeated annual analyses because provider coverage and source lists were still expanding.

## Caveats

- Provider source expansion can mimic temporal growth or decline.
- Many policy exports have document dates but incomplete original event dates.
- Older-paper enrichment may reflect source coverage, review use, or policy-cycle length rather than causal influence.

## Links

- [policy document mentions](policy_document_mentions.md)
- [policy mention enrichment profiles](../methods/policy_mention_enrichment_profiles.md)
- [altmetric attention timing windows](../methods/altmetric_attention_timing_windows.md)
- [citation window selection](../methods/citation_window_selection.md)
- [policy attention coverage bias](../validations/policy_attention_coverage_bias.md)
- [policy-source corpus construction](../methods/policy_source_corpus_construction.md)
- [altmetric coverage sparsity](altmetric_coverage_sparsity.md)
- [public and policy attention](../mechanisms/public_policy_attention.md)

## References

- Bornmann, L., Haunschild, R., & Marx, W. (2016). Policy documents as sources for measuring societal impact: How often is climate change research mentioned in policy-related documents? *Scientometrics*, 109, 1477-1495. https://doi.org/10.1007/s11192-016-2115-y [OpenAlex: W2952238320; Dimensions: pub.1043901162; WoS: unknown]
- Haunschild, R., & Bornmann, L. (2017). How many scientific papers are mentioned in policy-related documents? An empirical investigation using Web of Science and Altmetric data. *Scientometrics*, 110, 1209-1216. https://doi.org/10.1007/s11192-016-2237-2 [OpenAlex: W2567946352; Dimensions: pub.1030351359; WoS: unknown]

## Metadata

- Concept ID: `policy_mention_time_lag`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Bornmann et al. (2016) (2016)
- Latest seen paper: Haunschild and Bornmann (2017) (2017)
- Primary reference DOI: `10.1007/s11192-016-2115-y`
- OpenAlex ID: `W2952238320`
- Dimensions ID: `pub.1043901162`
- SciSciNet ID: `unknown`
- Aliases: policy attention lag; policy uptake delay; policy mention delay; policy citation aging
