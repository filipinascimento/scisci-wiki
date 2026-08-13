# Spurious citation elite contamination

## Summary

Spurious citation elite contamination is the validation risk that extreme self-citation, citation farms, ghost authorship, or disambiguation errors place anomalous authors into the citation elite.

## Canonical Form

- Unit of analysis: highly cited author, citation elite tail, author profile, citation source set, self-citation pattern, or authorship record.
- Typical representation: elite-tail audit with self-citation shares, source concentration, authorship anomalies, and disambiguation checks.
- Validation target: distinguish legitimate high-impact author profiles from citation artifacts or manipulation.
- Empirical signature: a small subset of elite-tail authors has citation patterns inconsistent with ordinary field visibility or contribution.

## Uses in Science of Science

- Gives [citation elite concentration](../measures/citation_elite_concentration.md) a tail-quality audit.
- Connects author-level citation inequality to [citation metric gaming](citation_metric_gaming.md), [self-citation rates](../measures/self_citation_rates.md), and [citation source concentration ratio](../measures/citation_source_concentration_ratio.md).
- Provides a responsible-metrics check before using top-cited author lists for evaluation, policy, or institutional benchmarking.

## Operationalization

- Identify authors in the top citation percentiles.
- Compute self-citation shares and citation-source concentration.
- Inspect whether citations come from unusually narrow author, journal, or paper clusters.
- Check author disambiguation for merged identities and ghost-authorship plausibility.
- Report estimates with and without anomalous elite-tail profiles.

## Evidence and Validations

- Verified full-text evidence from Nielsen and Andersen (2021) warns that their dataset likely includes spuriously highly cited authors generated through extreme self-citations, citation farms, and ghost authorships.
- The paper notes that these authors are formally part of the citation elite but may differ from typical top-cited scientists.
- Nielsen and Andersen treat this as a limitation of citation-elite interpretation rather than a reason to ignore elite-tail concentration.
- The caveat complements author-level metric audits that treat extreme citation behavior as a responsible-metrics risk.

## Caveats

- Extreme citation concentration can be legitimate in small specialties, method papers, or shared infrastructure work.
- Removing suspicious profiles requires transparent rules to avoid arbitrary exclusion.
- Tail audits should preserve both versions of estimates when exclusion decisions are uncertain.

## Links

- [citation elite concentration](../measures/citation_elite_concentration.md)
- [citation metric gaming](citation_metric_gaming.md)
- [self-citation rates](../measures/self_citation_rates.md)
- [self-citation-excluded author metrics](../measures/self_citation_excluded_author_metrics.md)
- [citation source concentration ratio](../measures/citation_source_concentration_ratio.md)
- [Scopus author profile disambiguation audit](scopus_author_profile_disambiguation_audit.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Nielsen, M. W., & Andersen, J. P. (2021). Global citation inequality is on the rise. *Proceedings of the National Academy of Sciences*, 118(7), e2012208118. https://doi.org/10.1073/pnas.2012208118 [OpenAlex: W3128893582; Dimensions: pub.1135221443; WoS: unknown]

## Metadata

- Concept ID: `spurious_citation_elite_contamination`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Nielsen and Andersen (2021) (2021)
- Latest seen paper: Nielsen and Andersen (2021) (2021)
- Primary reference DOI: `10.1073/pnas.2012208118`
- OpenAlex ID: `W3128893582`
- Dimensions ID: `pub.1135221443`
- SciSciNet ID: `W3128893582`
- Aliases: spurious citation elite; anomalous highly cited author audit; citation-farm elite contamination; ghost-authorship citation elite caveat
